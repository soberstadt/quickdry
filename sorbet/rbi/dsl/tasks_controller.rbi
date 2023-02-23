# typed: true

# DO NOT EDIT MANUALLY
# This is an autogenerated file for dynamic methods in `TasksController`.
# Please instead update this file by running `bin/tapioca dsl TasksController`.

class TasksController
  sig { returns(HelperProxy) }
  def helpers; end

  module HelperMethods
    include ::ActionText::ContentHelper
    include ::ActionText::TagHelper
    include ::InertiaRails::Helper
    include ::ActionController::Base::HelperMethods
    include ::ApplicationHelper
    include ::NotesHelper
  end

  class HelperProxy < ::ActionView::Base
    include HelperMethods
  end
end
