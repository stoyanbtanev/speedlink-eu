const USE_LOCAL = true;
const L = (local, fallback) => (USE_LOCAL ? local : fallback);

export const IMAGES = {
  hero: [
    L("/images/hero-1.jpg", "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"),
    L("/images/hero-2.jpg", "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"),
    L("/images/hero-3.jpg", "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80"),
    L("/images/hero-4.jpg", "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?auto=format&fit=crop&w=800&q=80"),
    L("/images/hero-5.jpg", "https://images.unsplash.com/photo-1605732562742-3023a888e56e?auto=format&fit=crop&w=800&q=80"),
    L("/images/hero-6.jpg", "https://images.unsplash.com/photo-1601584115197-04eefb3c78d4?auto=format&fit=crop&w=800&q=80"),
    L("/images/hero-7.jpg", "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800&q=80"),
    L("/images/hero-8.jpg", "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80"),
    L("/images/hero-9.jpg", "https://images.unsplash.com/photo-1473445361085-b9a07f55608e?auto=format&fit=crop&w=800&q=80"),
  ],
  services: {
    ftl: L("/images/service-ftl.jpg", "https://images.unsplash.com/photo-1601584115197-04eefb3c78d4?auto=format&fit=crop&w=800&q=80"),
    ltl: L("/images/service-ltl.jpg", "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80"),
    ocean: L("/images/service-ocean.jpg", "https://images.unsplash.com/photo-1605732562742-3023a888e56e?auto=format&fit=crop&w=800&q=80"),
    air: L("/images/service-air.jpg", "https://images.unsplash.com/photo-1436491865332-7a61a109db05?auto=format&fit=crop&w=800&q=80"),
    customs: L("/images/service-customs.jpg", "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"),
    warehouse: L("/images/service-warehouse.jpg", "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80"),
  },
  gallery: [
    L("/images/gallery-1.jpg", "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?auto=format&fit=crop&w=1600&q=80"),
    L("/images/gallery-2.jpg", "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80"),
    L("/images/gallery-3.jpg", "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1600&q=80"),
    L("/images/gallery-4.jpg", "https://images.unsplash.com/photo-1605732562742-3023a888e56e?auto=format&fit=crop&w=1600&q=80"),
    L("/images/gallery-5.jpg", "https://images.unsplash.com/photo-1601584115197-04eefb3c78d4?auto=format&fit=crop&w=1600&q=80"),
  ],
  stats: L("/images/stats.jpg", "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80"),
  industries: {
    ecommerce: L("/images/industry-ecommerce.jpg", "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80"),
    automotive: L("/images/industry-automotive.jpg", "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=600&q=80"),
    pharma: L("/images/industry-pharma.jpg", "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=600&q=80"),
    chemical: L("/images/industry-chemical.jpg", "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=600&q=80"),
    food: L("/images/industry-food.jpg", "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80"),
  },
  pageHeaders: {
    services: L("/images/header-services.jpg", "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?auto=format&fit=crop&w=1920&q=80"),
    reviews: L("/images/header-reviews.jpg", "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80"),
    contact: L("/images/header-contact.jpg", "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"),
  },
  contactMap: L("/images/contact-map.jpg", "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&w=1600&q=80"),
};
