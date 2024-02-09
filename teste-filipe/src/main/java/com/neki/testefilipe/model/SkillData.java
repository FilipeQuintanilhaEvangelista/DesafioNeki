package com.neki.testefilipe.model;

public enum SkillData {
    HTML("HTML",
            "Linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML.",
            "https://logodownload.org/wp-content/uploads/2016/10/html5-logo-5.png"),
    CSS("CSS", 
            "Mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>. Também é possível, adicionar estilos adicionando um link para um arquivo CSS que contém os estilos.",
            "https://logodownload.org/wp-content/uploads/2017/04/css-3-logo-5.png"),
    JAVASCRIPT("JavaScript",
            "Linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
            "https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-4.png"),
    REACT("React",
            "Biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web, baseada em componentes reutilizáveis e amplamente utilizada no desenvolvimento de aplicações web e móveis.",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"),
    NODE_JS("Node.js",
            "Software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png"),
    JAVA("Java",
            "Linguagem de programação backend orientada a objetos, segura e confiável para codificar tudo, desde aplicações móveis e software empresarial até aplicações de big data e tecnologias do servidor.",
            "https://cdn-icons-png.flaticon.com/512/5968/5968282.png"),
    SPRING_BOOT("Spring Boot",
            "Framework para desenvolvimento de aplicações Java que simplifica a configuração e o desenvolvimento de aplicativos baseados em Spring, oferecendo uma abordagem opinativa e pronta para uso, permitindo que os desenvolvedores criem rapidamente aplicativos robustos e escaláveis com menos configuração.",
            "https://cdn.icon-icons.com/icons2/3915/PNG/512/springboot_logo_icon_249540.png"),
    PYTHON("Python",
            "Linguagem de programação de alto nível, interpretada, dinâmica e multiuso, conhecida por sua sintaxe clara e legibilidade, amplamente utilizada em desenvolvimento web, científico, análise de dados, automação, entre outros.",
            "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"),
    PHP("PHP",
            "Linguagem de script amplamente usada para desenvolvimento web, conhecida por sua simplicidade e integração fácil com HTML.",
            "https://images.vexels.com/media/users/3/166470/isolated/preview/73835fa38fba6d35aff9de603dc5044a-icone-da-linguagem-de-programacao-php.png"),
    TYPESCRIPT("TypeScript",
            "Linguagem de programação desenvolvida pela Microsoft que é uma extensão tipada do JavaScript, permitindo a definição de tipos estáticos durante o desenvolvimento para facilitar a detecção de erros e melhorar a manutenibilidade do código JavaScript.",
            "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/typescript-def.png"),
    SQL("SQL",
            "Linguagem de programação usada para gerenciar e manipular bancos de dados relacionais, permitindo a criação, consulta, atualização e exclusão de dados armazenados em um banco de dados.",
            "https://static-00.iconduck.com/assets.00/sql-database-sql-azure-icon-1955x2048-4pmty46t.png");

    private final String name;
    private final String description;
    private final String imageUrl;

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    SkillData(String name, String description, String imageUrl) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}
