class TeachersController < ApplicationController

    def index
        @teachers = Teacher.all
        respond_to do |format|
            format.html
            format.json { render json: @teachers}
        end
    end


    def show
        @teacher = Teacher.find(params[:id])

        render json: @teacher
    end

    def dashboard

    end
    
end
