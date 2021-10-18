# DO NOT EDIT MANUALLY
# This is an autogenerated file for types exported from the `marcel` gem.
# Please instead update this file by running `bin/tapioca gem marcel`.

# typed: true

module Marcel; end
Marcel::EXTENSIONS = T.let(T.unsafe(nil), Hash)
Marcel::MAGIC = T.let(T.unsafe(nil), Array)

class Marcel::Magic
  def initialize(type); end

  def ==(other); end
  def audio?; end
  def child_of?(parent); end
  def comment; end
  def eql?(other); end
  def extensions; end
  def hash; end
  def image?; end
  def mediatype; end
  def subtype; end
  def text?; end
  def to_s; end
  def type; end
  def video?; end

  class << self
    def add(type, options); end
    def all_by_magic(io); end
    def by_extension(ext); end
    def by_magic(io); end
    def by_path(path); end
    def child?(child, parent); end
    def remove(type); end

    private

    def magic_match(io, method); end
    def magic_match_io(io, matches, buffer); end
  end
end

class Marcel::MimeType
  class << self
    def extend(type, extensions: T.unsafe(nil), parents: T.unsafe(nil), magic: T.unsafe(nil)); end
    def for(pathname_or_io = T.unsafe(nil), name: T.unsafe(nil), extension: T.unsafe(nil), declared_type: T.unsafe(nil)); end

    private

    def for_data(pathname_or_io); end
    def for_declared_type(declared_type); end
    def for_extension(extension); end
    def for_name(name); end
    def most_specific_type(from_magic_type, fallback_type); end
    def parse_media_type(content_type); end
    def root_types(type); end
    def with_io(pathname_or_io, &block); end
  end
end

Marcel::MimeType::BINARY = T.let(T.unsafe(nil), String)
Marcel::TYPES = T.let(T.unsafe(nil), Hash)
Marcel::VERSION = T.let(T.unsafe(nil), String)
