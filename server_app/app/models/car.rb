class Car < ApplicationRecord
  has_one :engine, dependent: :destroy
  accepts_nested_attributes_for :engine, allow_destroy: true

  validates :brand, presence: true
  validates :model, presence: true
  validates :production_year, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 1886 }
  validates :price, presence: true, numericality: { greater_than_or_equal_to: 0 }
end
