var paths = {};

// Directory locations
paths.appDir             = '_app/';  // The files Gulp will work on
paths.jekyllDir          = '';       // The files Jekyll will work on
paths.siteDir            = '_site/'; // The resulting static site


// Folder naming conventions
paths.postFolderName    = '_posts';
paths.draftFolderName   = '_drafts';
paths.pagesFolderName   = '_pages';
paths.assetsFolderName  = 'assets';
paths.imageFolderName   = 'images';


// App files locations
paths.appSassFiles   = paths.appDir  + "sass/**/";
paths.appImageFiles  = paths.appDir  + paths.imageFolderName;
paths.appAssetsFiles = paths.appDir  + paths.assetsFolderName;


// Jekyll files locations
paths.jekyllPostFiles  = paths.jekyllDir + paths.postFolderName;
paths.jekyllDraftFiles = paths.jekyllDir + paths.draftFolderName;
paths.jekyllHtmlFiles  = paths.jekyllDir + paths.pagesFolderName;
paths.jekyllImageFiles = paths.jekyllDir + paths.imageFolderName;

paths.jekyllStyleFiles = paths.jekyllDir + paths.assetsFolderName;


// Glob patterns by file type
paths.sassPattern        = '*.scss';
paths.jsPattern          = '*.js';
paths.imagePattern       = '*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|gif|GIF|webp|WEBP|tif|TIF)';
paths.markdownPattern    = '*.+(md|MD|markdown|MARKDOWN)';
paths.htmlPattern        = '*.html';
paths.xmlPattern         = '*.xml';

// App files globs
paths.appSassFilesGlob     = paths.appSassFiles     + paths.sassPattern;
paths.appImageFilesGlob    = paths.appImageFiles    + paths.imagePattern;

// Jekyll files globs
paths.jekyllPostFilesGlob    = paths.jekyllPostFiles  + paths.markdownPattern;
paths.jekyllDraftFilesGlob   = paths.jekyllDraftFiles + paths.markdownPattern;
paths.jekyllHtmlFilesGlob    = paths.jekyllHtmlFiles  + paths.htmlPattern;
paths.jekyllImageFilesGlob   = paths.jekyllImageFiles + paths.imagePattern;

module.exports = paths;
