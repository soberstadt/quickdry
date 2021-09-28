# stolen from https://github.com/inertiajs/inertia-rails/pull/72
module InertiaCSRF
  extend ActiveSupport::Concern

  included do
    after_action do
      # Axios by default looks for an XSRF-TOKEN cookie to use for POST requests
      cookies['XSRF-TOKEN'] = form_authenticity_token unless request.inertia?
    end
  end

  def request_authenticity_tokens
    [form_authenticity_param, request.x_csrf_token, request.headers['X-XSRF-TOKEN']]
  end
end
