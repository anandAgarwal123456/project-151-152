AFRAME.registerComponent("car",{
    schema:{
        width: {type:"number", default:40},
        height: {type:"number", default:3}
    },

    init: function() {
        this.el.setAttribute("geometry", {
            primitive:"cuboid",
            width: this.data.radius,
            height: this.data.height
        });
        this.el.setAttribute("material",{color:"#1769aa"})
    },
}) 