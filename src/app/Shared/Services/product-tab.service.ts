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
            id:1,
            cardImage:'/assets/vegetables.jpg',
            title:'Agriculture Products',
            content:'Connecting farmers directly with consumers through an online platform, our agricultural e-commerce venture offers a diverse range of fresh and sustainable farm products.',
            name:'Agriculture',
            type:'agri',
            route:'agri'


        },
        {
            id:2,
            cardImage:'/assets/seeds.jpeg',
            title:'Seeds',
            content:'Explore a diverse selection of high-quality seeds for your gardening needs on our e-commerce platform, offering a wide range of premium seeds to nurture your plants and cultivate a thriving garden at home.',
            name:'Seeds',
            type:'seeds',
            route:'/seeds'

        },
        {
            id:3,
            cardImage:'/assets/fertilizer.jpeg',
            title:'Fertilizer',
            content:'Discover eco-friendly and effective natural fertilizers for a healthier garden on our e-commerce platform. Enhance soil nutrition sustainably with our curated selection, fostering greener and more vibrant plant growth.',
            name:'Fertilizer',
            type:'fertilizer',
            route:'/fertilizer'

        }
    ]

}