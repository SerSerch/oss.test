const fs = require('fs');
const path = require('path');
const minimist = require('minimist');
const args = minimist(process.argv, {
    alias: { name: 'n', }
});
const componentName = args.name;
const nameLowerCase = componentName.toLowerCase();

fs.mkdirSync(path.resolve(__dirname, '..', 'src', 'components', componentName));

const componentCode = `import './${componentName}.scss';

import React, {Fragment, useState, useEffect} from 'react';

const ${componentName} = function(props) {
    //props
    const {myProps} = props;
    //state
    const [name, setName] = useState(null);
    //mount and update effect
    useEffect(function() {
        /* DidMount */
        
        return function() {
            /* Unmount */
        }
    }, []);
    
    return (
        <Fragment>
            /* context */
        </Fragment>
    );
}

export default ${componentName};`;

fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.jsx`),
    componentCode
);

fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, 'index.js'),
    `export {default} from './${componentName}';`
);

fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.scss`),
    `.${componentName.toLowerCase()} {}`
);