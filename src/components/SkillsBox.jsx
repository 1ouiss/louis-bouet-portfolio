import { Box } from "@mui/material";

const SkillsBox = ({skills}) => {

    return (
        <Box component="div" className="box-skills">
            {
                skills.map((skill) => (
                    <Box component="div" className="box" key={skill.id}>
                        <Box className="box-icon">
                            <i className={skill.className}></i>
                        </Box>
                        <span>{skill.title}</span>
                    </Box>
                ))
            }
        </Box>
    );
}
 
export default SkillsBox;