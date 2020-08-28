class HomeController < ApplicationController

  def index
    @props =  { book_text: "Props text" }
  end

end