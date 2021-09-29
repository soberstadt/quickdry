require_relative 'concerns/inertia_csrf'

class ApplicationController < ActionController::Base
  include InertiaCSRF
end
