class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :subject, :something
  has_many :students
  belongs_to :school

  def something
    'something'
  end

  def num_of_students
    object.students.size
  end
end
