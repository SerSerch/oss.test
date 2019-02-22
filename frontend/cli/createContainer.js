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

import React, { PureComponent } from 'react';

class ${componentName} extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
  
    render() {
        return (
            <div className="${nameLowerCase}">${componentName}</div>
        );
    }
}

export default ${componentName};`;

const containerCode = `import React from 'react';
import { connect } from 'react-redux';
import { testSigningIn } from 'actions/${nameLowerCase}Action';
import ${componentName} from 'components/${componentName}';


function mapStateToProps(state, ownProps) {
    return {
        //отвечает за то что будет в props компонента из store
        ...ownProps,
        ${nameLowerCase}: state.${nameLowerCase},
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        //отвечает за то что будет в props компонента из actions
        ...props,
        testSigningIn: (data) => dispatch(testSigningIn(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(${componentName});`;

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

fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'containers', componentName + 'Container.jsx'),
    containerCode
);