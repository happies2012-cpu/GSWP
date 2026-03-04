from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List

app = FastAPI()

# Allow CORS for local dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mock Database
TUTORIALS = [
    {"id": 1, "category": "ecommerce", "title": "Create a WooCommerce Store 2025", "desc": "Step by step guide to starting an online store from scratch. Perfect for beginners.", "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600"},
    {"id": 2, "category": "ecommerce", "title": "Stripe & PayPal Integration", "desc": "Learn how to accept payments seamlessly and securely on your WordPress site.", "image": "https://images.unsplash.com/photo-1574861459740-4ce0df20c242?w=600"},
    {"id": 3, "category": "ecommerce", "title": "Shipping Zones & Tax Automation", "desc": "Master local and international shipping configurations, plus automated tax logic.", "image": "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600"},
    
    {"id": 4, "category": "elementor", "title": "Elementor Pro Secrets", "desc": "Design mastery with Elementor. Build global design systems and headers.", "image": "https://images.unsplash.com/photo-1581850518616-bcb8077a2336?w=600"},
    {"id": 5, "category": "elementor", "title": "Responsive Design with Elementor", "desc": "Ensure your layouts look perfect on mobile, tablet, and desktop devices.", "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600"},
    {"id": 6, "category": "elementor", "title": "Dynamic Content and Custom Fields", "desc": "Leverage ACF and Elementor Theme Builder to create massive dynamic websites.", "image": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600"},

    {"id": 7, "category": "divi", "title": "Divi 4.0 Theme Builder Layouts", "desc": "Build amazing dynamic layouts with Divi's Theme Builder feature.", "image": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600"},
    {"id": 8, "category": "divi", "title": "Divi Speed Optimization Guide", "desc": "Make your Divi website load in under 1 second to improve conversions.", "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"},
    {"id": 9, "category": "divi", "title": "WooCommerce with Divi Shop Builder", "desc": "Customize your product pages and cart using Divi visually without code.", "image": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600"}
]

ARTICLES = [
    {"id": 1, "category": "plugins", "title": "Top 10 Plugins for Core Web Vitals", "desc": "Improve your speed and Google rankings with these proven caching plugins.", "date": "Nov 20, 2024", "image": "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600"},
    {"id": 2, "category": "plugins", "title": "Essential Security Plugins 2025", "desc": "Keep hackers out. A deep dive into Wordfence, Solid Security, and more.", "date": "Nov 12, 2024", "image": "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600"},
    {"id": 3, "category": "plugins", "title": "Best SEO Plugins: RankMath vs Yoast", "desc": "We compared the biggest heavyweights in WordPress SEO. Here's our verdict.", "date": "Nov 05, 2024", "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600"},

    {"id": 4, "category": "themes", "title": "Best Free Themes in 2025", "desc": "Don't pay for themes until you read this. Full comparison of Astra, GeneratePress, and OceanWP.", "date": "Oct 28, 2024", "image": "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600"},
    {"id": 5, "category": "themes", "title": "Why Premium Themes Often Suck", "desc": "Stop buying bloated ThemeForest themes. Build your own using a lightweight starter.", "date": "Oct 15, 2024", "image": "https://images.unsplash.com/photo-1627398242454-e4ff3a6af625?w=600"},
    
    {"id": 6, "category": "reviews", "title": "Hostinger Review: Best Budget Host?", "desc": "Deep dive into Hostinger performance, uptime, and new AI tools.", "date": "Oct 30, 2024", "image": "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600"},
    {"id": 7, "category": "reviews", "title": "Kinsta vs WP Engine for Enterprise", "desc": "Which premium managed hosting provides the best raw compute and support?", "date": "Oct 10, 2024", "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600"},
    {"id": 8, "category": "reviews", "title": "Crocoblock JetEngine Review", "desc": "Is it the best dynamic content plugin for Elementor and Gutenberg?", "date": "Sep 22, 2024", "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600"}
]

SERVICES = [
    {"id": 1, "title": "Speed Optimization", "price": "$199", "desc": "90+ Google PageSpeed Guarantee. We will cache, minify, and optimize your entire site for lightning-fast loading times."},
    {"id": 2, "title": "Custom Web Design", "price": "$999", "desc": "Full website redesign using Elementor or Divi, beautifully tailored flawlessly to your brand identity. Includes 5 custom pages."},
    {"id": 3, "title": "Malware Removal", "price": "$299", "desc": "Site hacked? We will securely clean up infections, patch backdoors, and implement firewalls so it never happens again."},
    {"id": 4, "title": "WooCommerce Setup", "price": "$1,499", "desc": "Turnkey online store launch. We configure payments, shipping, variable products, and automated email receipts."},
]

@app.get("/api/tutorials/{category}")
def get_tutorials(category: str):
    if category == "all":
        return TUTORIALS
    return [t for t in TUTORIALS if t["category"] == category]

@app.get("/api/articles/{category}")
def get_articles(category: str):
    if category == "all":
        return ARTICLES
    return [a for a in ARTICLES if a["category"] == category]

@app.get("/api/services")
def get_services():
    return SERVICES
