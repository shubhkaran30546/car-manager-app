class CreateEngines < ActiveRecord::Migration[8.0]
  def change
    create_table :engines do |t|
      t.string :fuel_type
      t.decimal :displacement
      t.integer :power
      t.references :car, null: false, foreign_key: true

      t.timestamps
    end
  end
end
