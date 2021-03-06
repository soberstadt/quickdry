# typed: strong
# This is an autogenerated file for Rails routes.
# Please run bundle exec rake rails_rbi:routes to regenerate.
class ActionController::Base
  include GeneratedUrlHelpers
end

class ActionController::API
  include GeneratedUrlHelpers
end

module ActionView::Helpers
  include GeneratedUrlHelpers
end

class ActionMailer::Base
  include GeneratedUrlHelpers
end

class ActionDispatch::IntegrationTest
  include GeneratedUrlHelpers
end

class ActionDispatch::SystemTestCase
  include GeneratedUrlHelpers
end

module GeneratedUrlHelpers
  # Sigs for route /notes(.:format)
  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def notes_path(*args, **kwargs); end

  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def notes_url(*args, **kwargs); end

  # Sigs for route /notes/new(.:format)
  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def new_note_path(*args, **kwargs); end

  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def new_note_url(*args, **kwargs); end

  # Sigs for route /notes/:id(.:format)
  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def note_path(*args, **kwargs); end

  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def note_url(*args, **kwargs); end

  # Sigs for route /search(.:format)
  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def search_index_path(*args, **kwargs); end

  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def search_index_url(*args, **kwargs); end

  # Sigs for route /tasks(.:format)
  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def tasks_path(*args, **kwargs); end

  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def tasks_url(*args, **kwargs); end

  # Sigs for route /tasks/:id(.:format)
  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def task_path(*args, **kwargs); end

  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def task_url(*args, **kwargs); end

  # Sigs for route /rails/active_storage/blobs/redirect/:signed_id/*filename(.:format)
  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def rails_service_blob_path(*args, **kwargs); end

  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def rails_service_blob_url(*args, **kwargs); end

  # Sigs for route /rails/active_storage/blobs/proxy/:signed_id/*filename(.:format)
  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def rails_service_blob_proxy_path(*args, **kwargs); end

  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def rails_service_blob_proxy_url(*args, **kwargs); end

  # Sigs for route /rails/active_storage/representations/redirect/:signed_blob_id/:variation_key/*filename(.:format)
  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def rails_blob_representation_path(*args, **kwargs); end

  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def rails_blob_representation_url(*args, **kwargs); end

  # Sigs for route /rails/active_storage/representations/proxy/:signed_blob_id/:variation_key/*filename(.:format)
  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def rails_blob_representation_proxy_path(*args, **kwargs); end

  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def rails_blob_representation_proxy_url(*args, **kwargs); end

  # Sigs for route /rails/active_storage/disk/:encoded_key/*filename(.:format)
  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def rails_disk_service_path(*args, **kwargs); end

  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def rails_disk_service_url(*args, **kwargs); end

  # Sigs for route /rails/active_storage/disk/:encoded_token(.:format)
  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def update_rails_disk_service_path(*args, **kwargs); end

  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def update_rails_disk_service_url(*args, **kwargs); end

  # Sigs for route /rails/active_storage/direct_uploads(.:format)
  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def rails_direct_uploads_path(*args, **kwargs); end

  sig { params(args: T.untyped, kwargs: T.untyped).returns(String) }
  def rails_direct_uploads_url(*args, **kwargs); end
end
