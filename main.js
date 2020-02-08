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
        lnStyle: 'display:block;',
        ghStyle: 'display:block;',
        fbStyle: 'display:block;',
        instaStyle: 'display:block;',
        twitterStyle: 'display:block;',
        backgroundStyle: 'background: rgba(0,0,0,0);'
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
            this.modalStyle4 = 'display:none;',
            this.lnStyle = 'display:none;',
            this.ghStyle = 'display:none;',
            this.fbStyle = 'display:none;',
            this.instaStyle = 'display:none;',
            this.twitterStyle = 'display:none;',
            this.backgroundStyle = 'background: rgba(0,0,0, 0.45);'
        },
        openModal2: function() {
            this.buttonStyle1 = 'display:none;',
            this.modalStyle1 = 'display:none;',
            this.buttonStyle2 = 'display:none;';
            this.modalStyle2 = 'display:flex;',
            this.buttonStyle3 = 'display:none;',
            this.modalStyle3 = 'display:none;',
            this.buttonStyle4 = 'display:none;',
            this.modalStyle4 = 'display:none;',
            this.lnStyle = 'display:none;',
            this.ghStyle = 'display:none;',
            this.fbStyle = 'display:none;',
            this.instaStyle = 'display:none;',
            this.twitterStyle = 'display:none;',
            this.backgroundStyle = 'background: rgba(0,0,0, 0.45);'
        },
        openModal3: function() {
            this.buttonStyle1 = 'display:none;',
            this.modalStyle1 = 'display:none;',
            this.buttonStyle2 = 'display:none;';
            this.modalStyle2 = 'display:none;',
            this.buttonStyle3 = 'display:none;',
            this.modalStyle3 = 'display:flex;',
            this.buttonStyle4 = 'display:none;',
            this.modalStyle4 = 'display:none;',
            this.lnStyle = 'display:none;',
            this.ghStyle = 'display:none;',
            this.fbStyle = 'display:none;',
            this.instaStyle = 'display:none;',
            this.twitterStyle = 'display:none;',
            this.backgroundStyle = 'background: rgba(0,0,0, 0.45);'
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
            this.lnStyle = 'display:none;',
            this.ghStyle = 'display:none;',
            this.fbStyle = 'display:none;',
            this.instaStyle = 'display:none;',
            this.twitterStyle = 'display:none;',
            this.backgroundStyle = 'background: rgba(0,0,0, 0.45);'
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
            this.lnStyle = 'display:block;',
            this.ghStyle = 'display:block;',
            this.fbStyle = 'display:block;',
            this.instaStyle = 'display:block;',
            this.twitterStyle = 'display:block;',
            this.backgroundStyle = 'background: rgba(0,0,0,0);'
        }
    }
});