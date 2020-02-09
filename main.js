new Vue ({
    el: "#app",
    data: {
        buttonStyle: 'display:block;',
        modalStyle1: 'display:none;',
        modalStyle2: 'display:none;',
        modalStyle3: 'display:none;',
        modalStyle4: 'display:none;',
        backgroundStyle: 'background: rgba(0,0,0,0);',
        flag: "0"
    },
    methods: {
        hideModal: function() {
            this.buttonStyle = 'display:block;',
            this.modalStyle1 = 'display:none;',
            this.modalStyle2 = 'display:none;',
            this.modalStyle3 = 'display:none;',
            this.modalStyle4 = 'display:none;',
            this.backgroundStyle = 'background: rgba(0,0,0,0);'
        }
    },
    watch: {
        flag: function(newValue){
            this.buttonStyle = 'display:none;',
            this.backgroundStyle = 'background: rgba(0,0,0, 0.45);'
            if(newValue === 1){
                this.modalStyle1 = 'display:flex;',
                this.modalStyle2 = 'display:none',
                this.modalStyle3 = 'display:none;',
                this.modalStyle4 = 'display:none;'
            }
            else if(newValue === 2){
                this.modalStyle1 = 'display:none;',
                this.modalStyle2 = 'display:flex;',
                this.modalStyle3 = 'display:none;',
                this.modalStyle4 = 'display:none;'
            }
            else if(newValue === 3){
                this.modalStyle1 = 'display:none;',
                this.modalStyle2 = 'display:none;',
                this.modalStyle3 = 'display:flex;',
                this.modalStyle4 = 'display:none;'
            }
            else if(newValue === 4){
                this.modalStyle1 = 'display:none;',
                this.modalStyle2 = 'display:none;',
                this.modalStyle3 = 'display:none;',
                this.modalStyle4 = 'display:flex;'
            }           
        }
    }
});