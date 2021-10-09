require_relative 'concerns/inertia_csrf'

class ApplicationController < ActionController::Base
  include InertiaCSRF

  inertia_share flash: -> { { message: flash.notice } }
end
