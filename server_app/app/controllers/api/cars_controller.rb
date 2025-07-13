class Api::CarsController < ApplicationController
    before_action :set_car, only: [ :show, :update, :destroy ]

    def index
      cars = Car.includes(:engine)
      render json: cars.map { |car| format_car_with_engine(car) }, status: :ok
    end

    def show
      if @car
        render json: format_car_with_engine(@car), status: :ok
      else
        render json: { error: "Car not found" }, status: :not_found
      end
    end

    def create
      car = Car.new(car_params)
      if car.save
        render json: { message: "Car created successfully" }, status: :created
      else
        render json: { errors: car.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def update
      if @car
        if @car.update(car_params)
          render json: { message: "Car updated successfully" }, status: :ok
        else
          render json: { errors: @car.errors.full_messages }, status: :unprocessable_entity
        end
      else
        render json: { error: "Car not found" }, status: :not_found
      end
    end

    def destroy
      if @car
        @car.destroy
        render json: { message: "Car deleted successfully" }, status: :ok
      else
        render json: { error: "Car not found" }, status: :not_found
      end
    end

    private

    def car_params
      params.require(:car).permit(
        :brand,
        :model,
        :production_year,
        :price,
        engine_attributes: [ :id, :fuel_type, :displacement, :power ]
        )
    end

    def set_car
      @car = Car.find_by(id: params[:id])
    end

    def format_car_with_engine(car)
      car.as_json(
        only: [ :id, :brand, :model, :production_year, :price ],
        include: {
          engine: {
            only: [ :id, :fuel_type, :displacement, :power ]
          }
        }
      )
    end
end
