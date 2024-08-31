const e="Make the bittersweetness of system development milder",t="We aim to contribute to improving system quality by automating and streamlining the work of engineers involved in system development. The tool is developed as OSS and released under Apache License 2.0.",a={SVQK:{features:`SVQK is an asset for developing web applications using SvelteKit, Quarkus, and Playwright.
You can start development with both the Frontend and Backend in a state where they pass tests (Unit, Integration, and End-to-End).
Everything from setup to End-to-End testing is completed with commands, making it executable in a CI/CD environment as well.`,usage:{requiredSoftware:"To develop applications using SVQK, you need the following software.",description:"To start developing with SVQK, create a project using Maven Archetype, which SVQK provides. To create a project from Archetype, run the following command.","setUtf-8":"Set the console character code to UTF-8.",createPj:"Create a SVQK project.",setup:"Move to the directory of the created project and execute the setup command.",openWs:"Open the created project as a VSCode workspace.",runTask:"Start the Backend and Frontend applications using VSCode Task.",access:"Once the Frontend application is started, the following URL will be displayed in the browser."}},"Batch Translator":{description:"Batch Translator is a CLI tool for translating text files. The main intended users are OSS development project members who need to translate READMEs and documents. The main expected uses are as follows.<br/><br/> - Translating a single file (e.g. README.md)<br/> - Batch translation of files with specific extensions under a directory (documents using AsciiDoctor, etc.)",usage:"Batch Translator runs as a Java command or as a Maven Plugin."},"JPA Entity Generator":{description:"JPA Entity Generator is a tool that reads a DB table definition and generates a JPA Entity class java file based on it.",usage:"JPA Entity Generator runs as a Java command or as a Maven Plugin."},"Dev Servers":{description:"Dev Servers is a Docker Compose asset to setup server tools for CI / CD. It setups the following tools with Docker and makes them available immediately.<br/><br/>- Souce Code Management : GitBucket<br/>- Continuous Integration : Jenkins<br/>- Static Code Analysis : SonarQube<br/>- Issue Tracking System : Redmine<br/>- Artifact Repository Manager : Nexus<br/>- Wiki : Wiki.js",usage:"Dev Servers runs as Docker Compose"},"CSV Loader":{description:"CSV Loader is a tool to load CSV files into DB. As of v0.8, CSV Loader is specialized for Flyway's Java-based Migration. We plan to support standalone jar execution, Maven Plugin, etc. in the next version.",usage:"CSV Loader is used as a Java library via Flyway."}},o="Project Au Lait is developed and operated by Monocrea Co., Ltd.",n={catchphrase:e,description:t,products:a,operatedBy:o};export{e as catchphrase,n as default,t as description,o as operatedBy,a as products};
