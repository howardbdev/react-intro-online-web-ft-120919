# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
cars_data = [
  {
    make: "Ford",
    model: "F150",
    year: "2000",
    miles: 220000,
    price: 20000,
    used: true
  },
  {
    make: "Chevy",
    model: "Silverado",
    year: "2009",
    miles: 250000,
    price: 10000,
    used: true
  },
  {
    make: "Tesla",
    model: "Model S",
    year: "2019",
    miles: 0,
    price: 45000,
    used: false
  },
]
Car.create(cars_data)

Customer.create(name: "Felicia", email: "felicia@felicia.com")

reviews_data = [
  {
    rating: 4,
    content: "Great!  Friendly staff and honest as the day is long!"
  },
  {
    rating: 1,
    content: "Sleazy! Avoid!"
  },
  {
    rating: 3,
    content: "What can I say, not the best car buying experience, but not the worst"
  }
]

DealerReview.create(reviews_data)
