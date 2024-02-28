import { Injectable } from "@angular/core";

@Injectable()
export class ProductService
{
    products=[
        {
            id:101,
            product_name:'Paddy',
            product_image:'assets/paddy.png',
            product_prize:'400'
        },
        {
            id:102,
            product_name:'Maize',
            product_image:'assets/maize.jpeg',
            product_prize:'800'
        },
        {
            id:103,
            product_name:'Sugarcane',
            product_image:'assets/sugarcane.jpeg',
            product_prize:'2000'
        },
        {
            id:104,
            product_name:'Blackgram',
            product_image:'assets/blackgram.jpeg',
            product_prize:'400'
        },
        {
            id:105,
            product_name:'Mung Bean',
            product_image:'assets/mungbean.jpeg',
            product_prize:'500'
        },
        {
            id:106,
            product_name:'Sesame',
            product_image:'assets/sesame.jpeg',
            product_prize:'200'
        },
        {
            id:107,
            product_name:'Wheat',
            product_image:'assets/wheat.jpeg',
            product_prize:'200'
        },
        {
            id:108,
            product_name:'Pearl Millet',
            product_image:'assets/pearlmillet.jpeg',
            product_prize:'300'
        },
    ]
}