package asciidoctorlive.web;

import org.asciidoctor.Asciidoctor;
import org.asciidoctor.Attributes;
import org.asciidoctor.Options;
import org.asciidoctor.OptionsBuilder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AsciidocConverterController {

    private static final Asciidoctor ASCII_DOCTOR = Asciidoctor.Factory.create();
    private static Options ASCII_DOCTOR_OPTIONS;

    public AsciidocConverterController() {
        Attributes attributes = new Attributes();
        attributes.setBackend("html5");
        attributes.setShowTitle(true);

        ASCII_DOCTOR_OPTIONS = OptionsBuilder.options().headerFooter(false).attributes(attributes).get();
    }

    @RequestMapping(value = "/convert", method = RequestMethod.POST)
    public String convert(@RequestBody String inputText) {

        return ASCII_DOCTOR.convert(inputText, ASCII_DOCTOR_OPTIONS);
    }
}