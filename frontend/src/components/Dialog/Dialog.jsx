import './Dialog.scss';

import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import DialogM from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Dialog extends PureComponent {

    render() {
        const {
            name,
            detailed,
            openDialog,
            closeDialog
        } = this.props;
        return (
                <DialogM
                    open={openDialog}
                    onClose={closeDialog}
                    scroll="paper"
                    aria-labelledby="scroll-dialog-title"
                >
                    <DialogTitle id="scroll-dialog-title">{name}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {detailed}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeDialog} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </DialogM>
        );
    }
}

export default Dialog;