import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn:'root'
    }
)
export class ProductTabService
{

    cardsData=[
        {
            id:'agri',
            cardImage:'/assets/images/vegetables.jpg',
            title:'Agriculture Products',
            content:'Connecting farmers directly with consumers through an online platform, our agricultural e-commerce venture offers a diverse range of fresh and sustainable farm products.',
            


        },
        {
            id:'seeds',
            cardImage:'/assets/images/seeds.jpeg',
            title:'Seeds',
            content:'Explore a diverse selection of high-quality seeds for your gardening needs on our e-commerce platform, offering a wide range of premium seeds to nurture your plants and cultivate a thriving garden at home.',
            

        },
        {
            id:'fertilizer',
            cardImage:'/assets/images/fertilizer.jpeg',
            title:'Fertilizer',
            content:'Discover eco-friendly and effective natural fertilizers for a healthier garden on our e-commerce platform. Enhance soil nutrition sustainably with our curated selection, fostering greener and more vibrant plant growth.',
            

        }
    ]

}