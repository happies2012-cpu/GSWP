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
    {"id": 1, "category": "ecommerce", "title": "WooCommerce Setup 2025", "desc": "Step by step guide to starting an online store.", "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600"},
    {"id": 2, "category": "elementor", "title": "Elementor Pro Secrets", "desc": "Design mastery with Elementor.", "image": "https://images.unsplash.com/photo-1581850518616-bcb8077a2336?w=600"},
    {"id": 3, "category": "divi", "title": "Divi 4.0 Layouts", "desc": "Build amazing layouts with Divi.", "image": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600"}
]

ARTICLES = [
    {"id": 1, "category": "plugins", "title": "Top 10 Plugins for Speed", "desc": "Improve your core web vitals.", "date": "Nov 20, 2024", "image": "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600"},
    {"id": 2, "category": "themes", "title": "Best Free Themes in 2025", "desc": "Don't pay for themes until you read this.", "date": "Nov 15, 2024", "image": "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600"},
    {"id": 3, "category": "reviews", "title": "Hostinger Review: Still the best?", "desc": "Deep dive into Hostinger performance.", "date": "Oct 30, 2024", "image": "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600"}
]

SERVICES = [
    {"id": 1, "title": "Speed Optimization", "price": "$199", "desc": "90+ Google Pagespeed Guaranteed."},
    {"id": 2, "title": "Website Redesign", "price": "$999", "desc": "Full Elementor/Divi redesign."},
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
