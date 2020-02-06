new Vue ({
    el: "#app",
    data: {
        buttonStyle1: 'display:block;',
        modalStyle1: 'display:none;',
        buttonStyle2: 'display:block;',
        modalStyle2: 'display:none;',
        buttonStyle3: 'display:block;',
        modalStyle3: 'display:none;',
        buttonStyle4: 'display:block;',
        modalStyle4: 'display:none;',
    },
    methods: {
        openModal1: function() {
            this.buttonStyle1 = 'display:none;',
            this.modalStyle1 = 'display:flex;',
            this.buttonStyle2 = 'display:none;',
            this.modalStyle2 = 'display:none',
            this.buttonStyle3 = 'display:none;',
            this.modalStyle3 = 'display:none;',
            this.buttonStyle4 = 'display:none;',
            this.modalStyle4 = 'display:none;'
        },
        openModal2: function() {
            this.buttonStyle1 = 'display:none;',
            this.modalStyle1 = 'display:none;',
            this.buttonStyle2 = 'display:none;';
            this.modalStyle2 = 'display:flex;',
            this.buttonStyle3 = 'display:none;',
            this.modalStyle3 = 'display:none;',
            this.buttonStyle4 = 'display:none;',
            this.modalStyle4 = 'display:none;'
        },
        openModal3: function() {
            this.buttonStyle1 = 'display:none;',
            this.modalStyle1 = 'display:none;',
            this.buttonStyle2 = 'display:none;';
            this.modalStyle2 = 'display:none;',
            this.buttonStyle3 = 'display:none;',
            this.modalStyle3 = 'display:flex;',
            this.buttonStyle4 = 'display:none;',
            this.modalStyle4 = 'display:none;'
        },
        openModal4: function() {
            this.buttonStyle1 = 'display:none;',
            this.modalStyle1 = 'display:none;',
            this.buttonStyle2 = 'display:none;';
            this.modalStyle2 = 'display:none;',
            this.buttonStyle3 = 'display:none;',
            this.modalStyle3 = 'display:none;',
            this.buttonStyle4 = 'display:none;',
            this.modalStyle4 = 'display:flex;'
        },
        hideModal: function() {
            this.modalStyle1 = 'display:none;',
            this.buttonStyle1 = 'display:block;',
            this.modalStyle2 = 'display:none;',
            this.buttonStyle2 = 'display:block;',
            this.modalStyle3 = 'display:none;',
            this.buttonStyle3 = 'display:block;',
            this.modalStyle4 = 'display:none;',
            this.buttonStyle4 = 'display:block;'
        }
    }
});