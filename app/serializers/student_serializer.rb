class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :teacher
end
