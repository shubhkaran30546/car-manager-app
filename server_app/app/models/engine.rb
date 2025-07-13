class Engine < ApplicationRecord
  belongs_to :car

  validates :fuel_type, presence: true
  validates :displacement, presence: true, numericality: { greater_than_or_equal_to: 0.1 }
  validates :power, presence: true, numericality: { greater_than_or_equal_to: 1 }
end
