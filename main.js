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
        modalStyle4: 'display:none;'
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
        hideModal1: function() {
            this.modalStyle1 = 'display:none;',
            this.buttonStyle1 = 'display:block;',
            this.modalStyle2 = 'display:none;',
            this.buttonStyle2 = 'display:block;',
            this.modalStyle3 = 'display:none;',
            this.buttonStyle3 = 'display:block;',
            this.modalStyle4 = 'display:none;',
            this.buttonStyle4 = 'display:block;'
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
        hideModal2: function() {
            this.modalStyle1 = 'display:none;',
            this.buttonStyle1 = 'display:block;',
            this.modalStyle2 = 'display:none;',
            this.buttonStyle2 = 'display:block;',
            this.modalStyle3 = 'display:none;',
            this.buttonStyle3 = 'display:block;',
            this.modalStyle4 = 'display:none;',
            this.buttonStyle4 = 'display:block;'
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
        hideModal3: function() {
            this.modalStyle1 = 'display:none;',
            this.buttonStyle1 = 'display:block;',
            this.modalStyle2 = 'display:none;',
            this.buttonStyle2 = 'display:block;',
            this.modalStyle3 = 'display:none;',
            this.buttonStyle3 = 'display:block;',
            this.modalStyle4 = 'display:none;',
            this.buttonStyle4 = 'display:block;'
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
        hideModal4: function() {
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