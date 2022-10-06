function googleTranslateElementInit() 
  
{

        new google.translate.TranslateElement
        ({
            pageLanguage: 'pt-br',
            includedLanguages: 'en,es,pt,ru,hi,zh-CN',
            autoDisplay: 'true',
            layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
        }, 
        
           'google_translate_element');
    
    }