json.extract! product, :id, :name, :price, :description, :text, :created_at, :updated_at
json.url product_url(product, format: :json)
