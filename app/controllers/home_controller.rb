class HomeController < ApplicationController

  def index
    @props =  { book_text: "momo" }
  end

end