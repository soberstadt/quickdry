# DO NOT EDIT MANUALLY
# This is an autogenerated file for types exported from the `erubi` gem.
# Please instead update this file by running `bin/tapioca gem erubi`.

# typed: true

module Erubi
  class << self
    def h(value); end
  end
end

class Erubi::Engine
  def initialize(input, properties = T.unsafe(nil)); end

  def bufvar; end
  def filename; end
  def src; end

  private

  def add_code(code); end
  def add_expression(indicator, code); end
  def add_expression_result(code); end
  def add_expression_result_escaped(code); end
  def add_postamble(postamble); end
  def add_text(text); end
  def handle(indicator, code, tailch, rspace, lspace); end
end

Erubi::MATCH_METHOD = T.let(T.unsafe(nil), Symbol)
Erubi::RANGE_ALL = T.let(T.unsafe(nil), Range)
Erubi::RANGE_FIRST = T.let(T.unsafe(nil), Integer)
Erubi::RANGE_LAST = T.let(T.unsafe(nil), Integer)
Erubi::TEXT_END = T.let(T.unsafe(nil), String)
Erubi::VERSION = T.let(T.unsafe(nil), String)
