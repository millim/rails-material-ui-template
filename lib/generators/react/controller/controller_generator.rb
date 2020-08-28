module React
  class ControllerGenerator < ::Rails::Generators::NamedBase
    source_root File.expand_path('templates', __dir__)
    argument :views, type: :array, default: [], banner: 'view view'
    check_class_collision suffix: 'Controller'
    def create_controller_files
      template 'controller.rb.erb', File.join('app/controllers', class_path, "#{file_name}_controller.rb")

      views.each do |view|
        @view = view
        template 'view.html.erb', File.join('app/views', class_path, file_name, "#{view}.html.erb")
        template 'react.js.erb', File.join('app/javascript/components', class_path, file_name, "#{view.camelcase}.js")
      end
    end


    private

    def in_path(end_file)
      file = File.join(class_path, file_name, end_file)
      file = file[1..-1] if file[0] == '/'
      file
    end

    def dashboard_path
      count = File.join(class_path, file_name).split("/").count
      s = ''
      count.times{ s += '../'}
      s
    end

  end
end
