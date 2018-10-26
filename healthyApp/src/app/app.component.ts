import { Component } from "@angular/core";
import { HttpService } from "./http.service";
import * as $ from "jquery";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  products: any;
  categories: any;
  searched: any;
  displayed: any;
  search: string;
  pages: any;
  subcategories: any;
  filtering: string;
  filteringsub: string;
  sorting: string;
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.products = [
      {
        name: "Kevin",
        price: "11.99",
        img: "assets/product1.png",
        position: "Small Forward",
        type: "Forward"
      },
      {
        name: "Steph",
        price: "24.98",
        img: "assets/product2.png",
        position: "Point Guard",
        type: "Guard"
      },
      {
        name: "Durant",
        price: "21.29",
        img: "assets/product1.png",
        position: "Small Forward",
        type: "Forward"
      },
      {
        name: "Curry",
        price: "30.00",
        img: "assets/product2.png",
        position: "Point Guard",
        type: "Guard"
      },
      {
        name: "Riley",
        price: "4000.00",
        img: "assets/product2.png",
        position: "Point Guard",
        type: "Guard"
      },
      {
        name: "Ryan",
        price: "0.04",
        img: "assets/product2.png",
        position: "Point Guard",
        type: "Guard"
      },
      {
        name: "Ayesha",
        price: "2000000.00",
        img: "assets/product2.png",
        position: "Point Guard",
        type: "Guard"
      },
      {
        name: "Boogie",
        price: "3.00",
        img: "assets/product3.png",
        position: "Center",
        type: "Center"
      },
      {
        name: "DeMarcus",
        price: "53.99",
        img: "assets/product3.png",
        position: "Center",
        type: "Center"
      },
      {
        name: "Draymon",
        price: "0.99",
        img: "assets/product4.png",
        position: "Power Forward",
        type: "Forward"
      },
      {
        name: "Klay",
        price: "500.00",
        img: "assets/product5.png",
        position: "Shooting Guard",
        type: "Guard"
      },
      {
        name: "Splash",
        price: "99.99",
        img: "assets/product5.png",
        position: "Shooting Guard",
        type: "Guard"
      },
      {
        name: "Thompson",
        price: "20.00",
        img: "assets/product5.png",
        position: "Shooting Guard",
        type: "Guard"
      },
      {
        name: "Iggy",
        price: "6.99",
        img: "assets/product6.png",
        position: "Small Forward",
        type: "Guard"
      },
      {
        name: "Andre",
        price: "2.99",
        img: "assets/product6.png",
        position: "Small Forward",
        type: "Forward"
      },
      {
        name: "Iggy",
        price: "80.00",
        img: "assets/product6.png",
        position: "Small Forward",
        type: "Guard"
      },
      {
        name: "Snake",
        price: "1.00",
        img: "assets/product1.png",
        position: "Small Forward",
        type: "Forward"
      },
      {
        name: "Cupcake",
        price: "0.50",
        img: "assets/product1.png",
        position: "Small Forward",
        type: "Forward"
      }
    ];
    this.categories = [
      "Point Guard",
      "Shooting Guard",
      "Small Forward",
      "Power Forward",
      "Center"
    ];
    this.subcategories = ["Guard", "Forward", "Center"];
    this.setVariables();
    window.onscroll = function() {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        document.getElementById("myBtn").style.display = "block";
      } else {
        document.getElementById("myBtn").style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document
  }
  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  setVariables() {
    this.search = "";
    this.searched = [...this.products];

    this.displayed = this.createTable(this.products, 0);
  }
  submitSearch() {
    event.preventDefault();
    if (!this.search) {
      this.setVariables();
      this.filtering = "";
      this.filteringsub = "";
    } else {
      let rgx = new RegExp("^[a-zA-Z0-9_.-]*$");
      if (rgx.test(this.search)) {
        let regex = new RegExp(".*" + this.search + ".*");
        let temp = this.products.filter(
          product =>
            regex.test(product.name) || regex.test(product.name.toLowerCase())
        );
        this.searched = temp;
        temp = this.createTable(temp, 0);
        this.displayed = temp;
        this.filtering = "";
        this.filteringsub = "";
      }
    }
  }
  sortBy() {
    if (this.sorting === "name") {
      this.displayed.sort(function(a, b) {
        return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
      });
    } else if (this.sorting === "nameR") {
      this.displayed.sort(function(a, b) {
        return b.name.toLowerCase() < a.name.toLowerCase() ? -1 : 1;
      });
    } else if (this.sorting === "price low") {
      this.displayed.sort(function(a, b) {
        return parseInt(a.price) < parseInt(b.price) ? -1 : 1;
      });
    } else if (this.sorting === "price high") {
      this.displayed.sort(function(a, b) {
        return parseInt(a.price) > parseInt(b.price) ? -1 : 1;
      });
    }
    let temp = this.createTable(this.displayed, 0);
    this.displayed = temp;
  }

  filterBy(value) {
    if (value === "Point Guard") {
      this.filtering = "Point Guard";
      let temp = this.products.filter(product => product.position === value);
      console.log(temp);
      this.displayed = temp;
    } else if (value === "Shooting Guard") {
      this.filtering = "Shooting Guard";
      let temp = this.products.filter(product => product.position === value);

      // temp = this.createTable(temp, 0);
      this.displayed = temp;
    } else if (value === "Small Forward") {
      this.filtering = "Small Forward";
      let temp = this.products.filter(product => product.position === value);

      // temp = this.createTable(temp, 0);
      this.displayed = temp;
    } else if (value === "Power Forward") {
      this.filtering = "Power Forward";
      let temp = this.products.filter(product => product.position === value);

      // temp = this.createTable(temp, 0);
      this.displayed = temp;
    } else if (value === "Center") {
      this.filtering = "Center";
      let temp = this.products.filter(product => product.position === value);

      // temp = this.createTable(temp, 0);
      this.displayed = temp;
    } else {
      this.displayed = this.products;
    }
  }
  filtersubBy(value) {
    if (value === "Guard") {
      this.filteringsub = "Guard";
      let temp = this.displayed.filter(product => product.type === value);
      let temp1 = temp
      this.displayed = temp1;
    } 
    else if (value === "Forward") {
      this.filteringsub = "Forward";
      let temp = this.displayed.filter(product => product.type === value);
      let temp1 = temp;
      this.displayed = temp1;

      // temp = this.createTable(temp, 0);

    }  else if (value === "Center") {
      let temp = this.displayed.filter(product => product.type === value);
      let temp1 = temp;
      this.displayed = temp1;

      // temp = this.createTable(temp, 0);
      
    } else {
      this.displayed = this.products;
    }
  }
  //       this.products.forEach(function (element, index){
  //         if(element.position == "Point Guard"){
  //         console.log('found', element)
  //           console.log(this.displayed);
  //           this.displayed.push(element);
  //           console.log(this.displayed);
  // }
  //       })

  createTable(data, index) {
    let table = [];
    for (let i = index * 24; i < index * 24 + 24 && i < data.length; i++) {
      table.push(data[i]);
    }
    return table;
  }
  reset() {
    this.displayed = this.products;
    this.sorting = "default";
    this.sortBy();
  }
}
