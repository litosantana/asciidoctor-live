package asciidoctorlive.web;

import org.markdownj.MarkdownProcessor;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MarkdownConverterController {

    private static final MarkdownProcessor MARKDOWN_PROCESSOR = new MarkdownProcessor();


    @RequestMapping(value = "/convertMarkdown", method = RequestMethod.POST)
    public String convert(@RequestBody String inputText) {

        return MARKDOWN_PROCESSOR.markdown(inputText);
    }

}
