import fs from 'fs';
import path from 'path';

function replaceInDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceInDir(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Textual replacements (ignoring imports like @relume_io)
            content = content.replace(/id="relume"/g, 'id="section"');
            content = content.replace(/Relume placeholder image/g, 'Placeholder image');
            content = content.replace(/Relume logo/g, 'Logo');
            content = content.replace(/© 2024 Relume/g, '© 2024 Speedlink');
            content = content.replace(/Relume\./g, 'Speedlink.');
            
            // Also matching standalone Relume mentions where it's just text
            content = content.replace(/Relume/g, 'Speedlink');
            
            // Revert @Speedlink_io/Speedlink-ui that might have got caught
            content = content.replace(/@Speedlink_io\/Speedlink-ui/gi, '@relume_io/relume-ui');
            content = content.replace(/useSpeedlink/g, 'useRelume');
            content = content.replace(/Speedlink-logo\.svg/g, 'relume-logo.svg');
            content = content.replace(/Speedlink-icon\.svg/g, 'relume-icon.svg');
            
            fs.writeFileSync(fullPath, content);
        }
    }
}

['src', 'начало', 'услуги', 'отзиви', 'контакт'].forEach(dir => {
    if (fs.existsSync(dir)) replaceInDir(dir);
});
