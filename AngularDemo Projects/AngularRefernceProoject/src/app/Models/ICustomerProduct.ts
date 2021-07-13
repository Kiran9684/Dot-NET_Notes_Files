import { ICustomer } from "./ICustomer";
import { IProduct } from "./IProduct";

export interface ICustomerProduct{

    productId:string;
    product :IProduct;
    customerID:string;
    customer : ICustomer;


    // [ForeignKey("Product")]
    // public string ProductId { get; set; }
    // public Product Product { get; set; }

    // [ForeignKey("Customer")]
    // public string CustomerID { get; set; }
    // public Customer Customer { get; set; }

}