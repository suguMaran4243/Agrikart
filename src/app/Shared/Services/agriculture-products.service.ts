import { Injectable } from '@angular/core';
import { Product } from 'src/app/Shared/Model/product.model';

@Injectable()
export class ProductService {
  public products: Product[] = [
    {
      id: 101,
      product_name: 'Paddy',
      product_image: 'assets/images/paddy.png',
      product_prize: 400,
      product_category: 'agri',
    },
    {
      id: 102,
      product_name: 'Maize',
      product_image: 'assets/images/maize.jpeg',
      product_prize: 800,
      product_category: 'agri',
    },
    {
      id: 103,
      product_name: 'Sugarcane',
      product_image: 'assets/images/sugarcane.jpeg',
      product_prize: 2000,
      product_category: 'agri',
    },
    {
      id: 104,
      product_name: 'Blackgram',
      product_image: 'assets/images/blackgram.jpeg',
      product_prize: 400,
      product_category: 'agri',
    },
    {
      id: 105,
      product_name: 'Mung Bean',
      product_image: 'assets/images/mungbean.jpeg',
      product_prize: 500,
      product_category: 'agri',
    },
    {
      id: 106,
      product_name: 'Sesame',
      product_image: 'assets/images/sesame.jpeg',
      product_prize: 200,
      product_category: 'agri',
    },
    {
      id: 107,
      product_name: 'Wheat',
      product_image: 'assets/images/wheat.jpeg',
      product_prize: 200,
      product_category: 'agri',
    },
    {
      id: 108,
      product_name: 'Pearl Millet',
      product_image: 'assets/images/pearlmillet.jpeg',
      product_prize: 300,
      product_category: 'agri',
    },
    {
      id: 109,
      product_name: 'Coconut',
      product_image: 'assets/images/coconut.jpeg',
      product_prize: 20,
      product_category: 'agri',
    },
    {
      id: 110,
      product_name: 'Brinjal',
      product_image: 'assets/images/brinjal.jpeg',
      product_prize: 40,
      product_category: 'agri',
    },

    // Seeds products
    {
      id: 201,
      product_name: 'Ground nut',
      product_image: 'assets/images/groundnut.jpeg',
      product_prize: 40,
      product_category: 'seeds',
    },
    {
      id: 202,
      product_name: "Lady's Finger seed",
      product_image: 'assets/images/ladysfingerseeds.jpeg',
      product_prize: 20,
      product_category: 'seeds',
    },
    {
      id: 203,
      product_name: 'Black Gram seed',
      product_image: 'assets/images/blackgramseeds.jpeg',
      product_prize: 80.78,
      product_category: 'seeds',
    },
    {
      id: 204,
      product_name: 'Maize seed',
      product_image: 'assets/images/maizeseeds.jpeg',
      product_prize: 90,
      product_category: 'seeds',
    },

    //Fertilizer products

    {
      id: 301,
      product_name: 'Urea',
      product_image: 'assets/images/urea.png',
      product_prize: 400,
      product_category: 'fertilizer',
    },
    {
      id: 302,
      product_name: 'Potassium',
      product_image: 'assets/images/pottasium.jpeg',
      product_prize: 700,
      product_category: 'fertilizer',
    },
    {
      id: 303,
      product_name: 'Sulphate',
      product_image: 'assets/images/sulphate.jpeg',
      product_prize: 1200,
      product_category: 'fertilizer',
    },
    {
      id: 304,
      product_name: 'Calcium Nitrate',
      product_image: 'assets/images/calciumnitrate.jpeg',
      product_prize: 1400,
      product_category: 'fertilizer',
    },
    {
      id: 305,
      product_name: 'Phytocil',
      product_image: 'assets/images/phytocil.png',
      product_prize: 1700,
      product_category: 'fertilizer',
    },
    {
      id: 306,
      product_name: 'Atonik',
      product_image: 'assets/images/atonik.png',
      product_prize: 500,
      product_category: 'fertilizer',
    },
    {
      id: 307,
      product_name: 'Vermicompost',
      product_image: 'assets/images/vermicompost.jpeg',
      product_prize: 1200,
      product_category: 'fertilizer',
    },
    {
      id: 308,
      product_name: 'Granular',
      product_image: 'assets/images/granular.jpg',
      product_prize: 500,
      product_category: 'fertilizer',
    },
    {
      id: 309,
      product_name: 'Cow Dung',
      product_image: 'assets/images/cowmanure.jpeg',
      product_prize: 5000,
      product_category: 'fertilizer',
    },
  ];
}
