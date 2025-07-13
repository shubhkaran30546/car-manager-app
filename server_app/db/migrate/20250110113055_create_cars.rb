class CreateCars < ActiveRecord::Migration[8.0]
  def change
    create_table :cars do |t|
      t.string :brand
      t.string :model
      t.integer :production_year
      t.decimal :price

      t.timestamps
    end
  end
end
