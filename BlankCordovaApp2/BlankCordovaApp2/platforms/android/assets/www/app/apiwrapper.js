var BhaktivrikshaAppOperations = BhaktivrikshaAppOperations || {};

BhaktivrikshaAppOperations.Components = (function(){

var MenuItem = (function () {
            function MenuItem(name, weight, price, category) {
                this.name = name;
                this.weight = weight;
                this.price = price;                
                this.category = category;
            }
            return MenuItem;
})();

var menuItems = function(){

    var menuItems = [];

    menuItems.push(new MenuItem("Spinach Dal","100g" ,3.5, "Main"));
    menuItems.push(new MenuItem("Chapathi","50g",0.10,"Main"));
    menuItems.push(new MenuItem("Chilli Paneer Sabji", "250g", 2.50, "Main"));
    menuItems.push(new MenuItem("Gulab Jamun", "150g", 1.50, "Desserts"));
    //menuItems.push(new MenuItem("Pakoda", "150g", 1.50, "Desserts"));

    
    console.log(menuItems);

    return menuItems;
    
	/* var d = $.Deferred();

	 var request = $.ajax(
            {
                url: "https://shop.bhaktivriksha.org.uk/test/entity_commerce_product.json?fields=title,sku",
                method: "GET",
                crossDomain: true,
                dataType: "jsonp"
            }
        );

	 	request.done(function (data) {

          alert(data.d.results[0]);

        });

        request.fail(
            function () {
                if (window.console) console.error("Request to configuration list failed.");

                d.reject();
            }
        );

        return d.promise(); */


}

return{
	MenuItems : menuItems
};

}());