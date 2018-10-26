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
	categoryType: string;
  filtering: string;
  sorting: string;
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.products = [
      {
        name: "11111",
        price: "1.00",
        img: "assets/product1.png",
        position: "Small Forward"
      },
      {
        name: "22222",
        price: "2.00",
        img: "assets/product2.png",
        position: "Point Guard"
      },
      {
        name: "33333",
        price: "3.00",
        img: "assets/product3.png",
        position: "Center"
      },
      {
        name: "44444",
        price: "4.00",
        img: "assets/product4.png",
        position: "Power Forward"
      },
      {
        name: "55555",
        price: "5.00",
        img: "assets/product5.png",
        position: "Shooting Guard"
      },
      {
        name: "66666",
        price: "6.00",
        img: "assets/product6.png",
        position: "Small Forward"
      }
    ];
    this.categories = [
      "Point Guard",
      "Shooting Guard",
      "Small Forward",
      "Power Forward",
      "Center"
    ];
    this.setVariables()
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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
    this.search = ""
    this.searched = [...this.products]

    this.displayed = this.createTable(this.products, 0)
   
    
 

  }
  submitSearch() {
    event.preventDefault()
    if (!this.search) {
      this.setVariables()
      this.filtering = "default"
    }
    else {
      let rgx = new RegExp('^[a-zA-Z0-9_.-]*$')
      if (rgx.test(this.search)) {
        let regex = new RegExp('.*' + this.search + '.*')
        let temp = this.products.filter(product => regex.test(product.name) || regex.test(product.name.toLowerCase()))
        this.searched = temp
        temp = this.createTable(temp, 0)
        this.displayed = temp
      }
    }
  }
  sortBy() {
    if (this.sorting === "default") {
      this.products.sort(function(a, b) {
        return a.id < b.id ? -1 : 1;
      });
    } else if (this.sorting === "name") { 
      this.products.sort(function(a, b) {
        return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
      });
    } else if (this.sorting === "nameR") {
      this.products.sort(function(a, b) {
        return b.name.toLowerCase() < a.name.toLowerCase() ? -1 : 1;
      });
    } else if (this.sorting === "price low") {
      this.products.sort(function(a, b) {
        return a.price < b.price ? -1 : 1;
      });
    } else if (this.sorting === "price high") {
      this.products.sort(function(a, b) {
        return a.price > b.price ? -1 : 1;
      });
    }
    this.displayed = this.createTable(this.products, 0);

  }

  filterBy(value){
    if (value === "All") {
      this.setVariables()
    }
    else {
      this.search = ""
      this.filtering = "default"
      let temp = this.products.filter(product => product.position === value)
      
      this.searched = temp
  
      temp = this.createTable(temp, 0)
      this.displayed = temp
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
    for (let i = index * 12; i < index * 12 + 12 && i < data.length; i++) {
      table.push(data[i]);
    }
    return table;
  }
  reset(){
    this.displayed = this.products;
    this.sorting = "default";
    this.sortBy()
  }
}
