export interface Offer {
    id: string;
    category: string;
    title: string;
    description: string;
    images: string[];
}

export const offersData: Offer[] = [
    {
        id: 'seasonal-specials',
        category: 'SEASONAL',
        title: 'FROZEN SUMMER FESTIVAL',
        description: 'Enjoy our limited-time summer specials! From tropical fruit sorbets to refreshing minty delights, we have the perfect treats to keep you cool all season long. Buy any two large scoops and get a mini cone absolutely free!',
        images: [
            'http://i.pinimg.com/736x/e7/9b/02/e79b029928d8e2c9c2042fbbdad06378.jpg',
            'https://i.pinimg.com/736x/b6/81/9e/b6819e1e9e1b7b0ec6e781be423476bb.jpg',
            'https://i.pinimg.com/736x/b6/81/9e/b6819e1e9e1b7b0ec6e781be423476bb.jpg'
        ]
    },
    {
        id: 'family-bundles',
        category: 'FAMILY',
        title: 'Family Feast Pack',
        description: 'Perfect for weekend gatherings! Our Family Feast Pack includes 4 signature sundaes, a variety of toppings, and two extra large waffle bowls. Share the joy of artisan ice cream with your loved ones at a special 20% discount.',
        images: [
            'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1556910110-a5a63dfd393c?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=1200'
        ]
    },
    {
        id: 'loyalty-rewards',
        category: 'LOYALTY',
        title: 'Sweetness Rewards',
        description: 'Join our Sweetness Rewards program and earn points with every scoop! Members get exclusive early access to new flavors, a free treat on their birthday, and a complimentary upgrade to premium toppings on every visit.',
        images: [
            'https://i.pinimg.com/736x/96/4f/45/964f451f7cfa207d3c82cb8ba690c521.jpg',
            'https://i.pinimg.com/736x/8d/29/4a/8d294aed26fbc3f422eec0a23098380d.jpg',
            'https://i.pinimg.com/736x/e8/ce/3d/e8ce3d24a99ea0b96d554717cd669241.jpg']
    }
];
