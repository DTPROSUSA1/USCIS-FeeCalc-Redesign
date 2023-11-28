const express = require("express");
const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');
const app = express();
const PORT = process.env.PORT || 3001;

// Function to read and parse YAML
function getYamlData(filePath) {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return yaml.load(fileContents);
  } catch (e) {
    console.error(e);
    return null;
  }
}

// Route to handle YAML data retrieval
app.get("/api/data/:filename", (req, res) => {
  const filename = req.params.filename;
  const data = getYamlData(`./yaml/${filename}.yaml`);
  if (data) {
    res.json(data);
  } else {
    res.status(404).send('File not found');
  }
});

app.get('/api/forms', (req, res) => {
    const yamlDir = path.join(__dirname, 'yaml');
    fs.readdir(yamlDir, (err, files) => {
        if (err) {
            console.error(err);
            res.status(500).send("Server error");
            return;
        }
        // Filter out non-YAML files
        files = files.filter(file => path.extname(file) === '.yaml');

        let activeForms = [];

        files.forEach((file, index) => {
            const filePath = path.join(yamlDir, file);
            const fileContents = fs.readFileSync(filePath, 'utf8');
            try {
                const data = yaml.load(fileContents);
                if (data && data.Active) {
                    activeForms.push(path.basename(file, '.yaml'));
                }
            } catch (e) {
                console.error(`Error parsing YAML file ${file}:`, e);
            }

            // If this is the last file, send the response
            if (index === files.length - 1) {
                res.json(activeForms);
            }
        });
    });
});


app.get('/api/form-details/:formName', (req, res) => {
    const formName = req.params.formName;
    const yamlFilePath = path.join(__dirname, 'yaml', `${formName}.yaml`);
    console.log(`Looking for file: ${yamlFilePath}`);

    fs.readFile(yamlFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(404).json({ error: 'Form not found' });
            return;
        }

        try {
            const yamlData = yaml.load(data);
            console.log(`YAML data loaded for form: ${formName}`, yamlData);

            // Check if the form is active and if the form details are present
            if (yamlData && yamlData.Active && yamlData[formName]) {
                res.json(yamlData[formName]);
            } else {
                res.status(404).json({ error: 'Form not active or not found' });
            }
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: 'Error parsing YAML data' });
        }
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
