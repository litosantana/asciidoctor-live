# asciidoctor-live

This is a very simple standalone application that provides a web-based UI that provides a live editor for [AsciiDoc](http://www.asciidoc.org) and [Markdown](http://daringfireball.net/projects/markdown/). It uses the following technologies:

* [Spring Boot](http://projects.spring.io/spring-boot/) to quickly create the app infrastructure
* [AsciidoctorJ](https://github.com/asciidoctor/asciidoctorj) to convert AsciiDoc to HTML
* [MarkdownJ](https://github.com/myabc/markdownj) to convert the Markdown to HTML

To run the application, go to the root project directory and simply type the following into a command line:

`gradle bootRun`

The application will be deployed to the following address:

[http://localhost:8080/editor.html](http://localhost:8080/editor.html)
