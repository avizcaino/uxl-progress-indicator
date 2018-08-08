const gulp = require('gulp');
const moduleName = 'uxl-redux';
gulp.task('generate-d-ts', () =>{
    require('dts-generator').default({
        name: moduleName,
        out: './index.d.ts',
        project: './gulp',
        baseDir: './src',
        resolveModuleId: params =>{
            console.log(params.currentModuleId);
            return params.currentModuleId === 'index' ? moduleName : `${moduleName}/${params.currentModuleId}`;
        }
    });
});