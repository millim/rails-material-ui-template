#### README
This is Rails + React Template, use [Rails](https://github.com/rails/rails) and [Rails-React](https://github.com/reactjs/react-rails).
Css style is [Material-UI](https://material-ui.com)!


#### Install
```
git clone https://github.com/millim/rails-material-ui-template.git

bundle install

yarn install

rails s

bin/webpack-dev-server
```

#### Generators Add
```
rails g react:controller Admin index new

  create  app/controllers/admin_controller.rb
  create  app/views/admin/index.html.erb
  create  app/javascript/components/admin/Index.js
  create  app/views/admin/new.html.erb
  create  app/javascript/components/admin/New.js    
```

```rb
# app/controllers/admin_controller.rb
class AdminController < ApplicationController
  def index
  end

  def new
  end
end
```

```erb
<!-- app/views/admin/index.html.erb -->
<%= react_component("admin/Index") %>
```

```js
// app/javascript/components/admin/Index.js
import React from 'react'
import Application from "../layout/Application";
export default function Index() {
  return (
    <Dashboard>
      "admin/Index"
    </Dashboard>
  )
}
```